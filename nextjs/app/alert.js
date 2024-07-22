"use client";

import {useEffect} from "react";

export function AlertOnMount({children}) {
	useEffect(() => {
		alert("Mounted!");
	}, []);
	return children;
}
