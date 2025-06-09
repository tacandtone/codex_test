import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const html = `\n    <!DOCTYPE html>\n    <html>\n      <body style="margin:0;padding:0;">\n        <iframe src="https://example.com" width="100%" height="100%" style="border:none;"></iframe>\n      </body>\n    </html>`;

  return (
    <View style={styles.container}>
      <WebView originWhitelist={["*"]} source={{ html }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
