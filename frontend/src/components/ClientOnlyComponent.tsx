// utils/withClientOnly.tsx
"use client";

import { useEffect, useState } from "react";
import React from "react";

export function withClientOnly<P extends object>(WrappedComponent: React.ComponentType<P>) {
  const ClientOnlyComponent = (props: P) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) return null;

    return <WrappedComponent {...props} />;
  };

  return ClientOnlyComponent;
}
