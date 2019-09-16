package com.socialcommerce;

import android.app.Activity;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.os.Handler;
import android.os.Looper;

import androidx.palette.graphics.Palette;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.squareup.picasso.Picasso;
import com.squareup.picasso.Target;

import javax.annotation.Nonnull;

public class DominantColorModule extends ReactContextBaseJavaModule {
    private final int defaultColor;
    public DominantColorModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
        this.defaultColor = Color.RED;
    }

    @Nonnull
    @Override
    public String getName() {
        return "DominantColor";
    }

    private int calculateAvgColor(Bitmap bitmap, int pixelSpacing) {
        int R = 0; int G = 0; int B = 0;
        int height = bitmap.getHeight();
        int width = bitmap.getWidth();
        int n = 0;
        int[] pixels = new int[width * height];

        bitmap.getPixels(pixels, 0, width, 0, 0, width, height);

        for (int i = 0; i < pixels.length; i += pixelSpacing) {
            int color = pixels[i];
            R += Color.red(color);
            G += Color.green(color);
            B += Color.blue(color);
            n++;
        }

        return Color.rgb(R / n, G / n, B / n);
    }

    private String intColorToHex(int color) {
        return String.format("#%06X", (0xFFFFFF & color));
    }

    private WritableMap mapColors(Bitmap bm) {
        Palette palette = Palette.from(bm).generate();
        WritableMap map = Arguments.createMap();

        String averageColor = intColorToHex(calculateAvgColor(bm, 5));
        String dominantColor = intColorToHex(palette.getDominantColor(defaultColor));
        String vibrantColor = intColorToHex(palette.getVibrantColor(defaultColor));
        String darkVibrantColor = intColorToHex(palette.getDarkVibrantColor(defaultColor));
        String lightVibrantColor = intColorToHex(palette.getLightVibrantColor(defaultColor));
        map.putString("averageColor", averageColor);
        map.putString("dominantColor", dominantColor);
        map.putString("vibrantColor", vibrantColor);
        map.putString("darkVibrantColor", darkVibrantColor);
        map.putString("lightVibrantColor", lightVibrantColor);

        return map;
    }

    private void loadImageFromUrl(final String url, final Promise promise) {
        final Activity activity = getCurrentActivity();
        Handler uiHandler = new Handler(Looper.getMainLooper());

        final Target target = new Target() {
            @Override
            public void onBitmapLoaded(Bitmap bitmap, Picasso.LoadedFrom from) {
                WritableMap colorMap = mapColors(bitmap);

                promise.resolve(colorMap);
            }

            @Override
            public void onBitmapFailed(Exception e, Drawable errorDrawable) {
                promise.reject("", e.getMessage());
            }

            @Override
            public void onPrepareLoad(Drawable placeHolderDrawable) {
            }
        };

        uiHandler.post(() -> Picasso.get()
                .load(url)
                .resize(200, 200)
                .into(target));
    }

    @ReactMethod
    public void colorsFromUrl(String url, final Promise promise) {
        this.loadImageFromUrl(url, promise);
    }


}
