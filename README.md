# Koka-vscode

This is an extension that brings support for the [Koka language][koka]. The
extension is on [github].

[koka]: https://github.com/koka-lang/koka
[github]: https://github.com/maelvalais/koka-vscode

# Development
You can hack the language files (`*.JSON-tmLanguage`); the `.tmLanguage` will be
regenerated with `shift+cmd+B` or with `node build.js`.

## 0.0.1
Initial release. I wrote build.js for generating the tmLanguage from the JSON
file.