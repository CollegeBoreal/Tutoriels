package com.tns.gen.android.widget;

public class NumberPicker_OnValueChangeListener implements android.widget.NumberPicker.OnValueChangeListener {
	public NumberPicker_OnValueChangeListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onValueChange(android.widget.NumberPicker param_0, int param_1, int param_2)  {
		java.lang.Object[] args = new java.lang.Object[3];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		com.tns.Runtime.callJSMethod(this, "onValueChange", void.class, args);
	}

}
