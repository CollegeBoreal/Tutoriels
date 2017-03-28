package com.tns.gen.android.widget;

public class SearchView_OnCloseListener implements android.widget.SearchView.OnCloseListener {
	public SearchView_OnCloseListener() {
		com.tns.Runtime.initInstance(this);
	}

	public boolean onClose()  {
		java.lang.Object[] args = null;
		return (boolean)com.tns.Runtime.callJSMethod(this, "onClose", boolean.class, args);
	}

}
