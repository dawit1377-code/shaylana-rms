# Shaylana native Android customer apps

This project builds seven distinct Android release APKs. Each APK is a thin Android WebView shell that opens its corresponding existing Shaylana customer PWA URL. It does not create another login system, store customer passwords separately, or implement a second order pipeline.

## Applications
- Breakfast: `com.shaylana.customer.breakfast`
- Lunch: `com.shaylana.customer.lunch`
- Dinner: `com.shaylana.customer.dinner`
- Juices: `com.shaylana.customer.juices`
- Hot Drinks: `com.shaylana.customer.hotdrinks`
- Soft Drinks: `com.shaylana.customer.softdrinks`
- Cake: `com.shaylana.customer.cake`

The apps load the existing live customer portal. Internet access is required. Existing customer-table sign-in/session and cashier approval workflow remain authoritative.

## Production signing (one-time setup)
A release signing key is required before the workflow can produce installable production APKs. Create one using a trusted machine with Java's `keytool`:

```bash
keytool -genkeypair -v -keystore shaylana-release.jks -alias shaylana-release -keyalg RSA -keysize 4096 -validity 10000
```

Keep the keystore and both passwords in a secure offline backup. Never commit the keystore or passwords to this repository. Losing the key prevents seamless updates of these app IDs.

In GitHub repository **Settings → Secrets and variables → Actions**, create these repository secrets:
- `ANDROID_KEYSTORE_BASE64`: Base64 encoding of the complete `shaylana-release.jks` file (for example, `base64 -w 0 shaylana-release.jks` on Linux).
- `ANDROID_KEYSTORE_PASSWORD`: keystore password.
- `ANDROID_KEY_ALIAS`: `shaylana-release` (or the alias chosen when generating the key).
- `ANDROID_KEY_PASSWORD`: key password.

Then run **Actions → Build Shaylana customer APKs → Run workflow**. The workflow builds and signs all seven release variants and uploads one artifact named `shaylana-seven-production-signed-apks`. Download the artifact ZIP and distribute each APK to its corresponding tablet.

## Updates
For every future release, keep the same application IDs and use the exact same signing keystore and alias. Increase `versionCode` in `app/build.gradle` before publishing an update. Android will then install the update over the existing app.

## Security / operational notes
- Do not share the keystore or passwords in chat, source control, or public files.
- The APK is a WebView wrapper around the existing HTTPS-hosted portal; it needs internet access for menu and order operations.
- Each APK has a unique Android application ID, so all seven can be installed side by side.
- Android tablets only. iOS and Windows require separate packaging approaches.
