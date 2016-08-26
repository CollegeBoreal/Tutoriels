package com.tns.gen.android.support.v7.widget;

public class Toolbar_OnMenuItemClickListener implements android.support.v7.widget.Toolbar.OnMenuItemClickListener {
	public Toolbar_OnMenuItemClickListener() {
		com.tns.Runtime.initInstance(this);
	}

	public boolean onMenuItemClick(android.view.MenuItem param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		return (boolean)com.tns.Runtime.callJSMethod(this, "onMenuItemClick", boolean.class, args);
	}

}
