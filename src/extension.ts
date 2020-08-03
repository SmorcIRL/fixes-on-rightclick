import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('FixesOnRMB.showFixes', () => {
		vscode.commands.executeCommand('editor.action.quickFix');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }