package com.tns.gen.android.widget;

public class NumberPicker_Formatter implements android.widget.NumberPicker.Formatter {
	public NumberPicker_Formatter() {
		com.tns.Runtime.initInstance(this);
	}

	public java.lang.String format(int param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		return (java.lang.String)com.tns.Runtime.callJSMethod(this, "format", java.lang.String.class, args);
	}

}
