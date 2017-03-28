package com.tns.gen.android.view;

public class View_OnFocusChangeListener implements android.view.View.OnFocusChangeListener {
	public View_OnFocusChangeListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onFocusChange(android.view.View param_0, boolean param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onFocusChange", void.class, args);
	}

}
