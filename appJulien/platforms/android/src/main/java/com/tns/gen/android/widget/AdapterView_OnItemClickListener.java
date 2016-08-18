package com.tns.gen.android.widget;

public class AdapterView_OnItemClickListener implements android.widget.AdapterView.OnItemClickListener {
	public AdapterView_OnItemClickListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onItemClick(android.widget.AdapterView param_0, android.view.View param_1, int param_2, long param_3)  {
		java.lang.Object[] args = new java.lang.Object[4];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		args[3] = param_3;
		com.tns.Runtime.callJSMethod(this, "onItemClick", void.class, args);
	}

}
