import React, { createContext, ReactNode, useContext, useState } from "react";

type LAYOUTCONTEXTYPE = {
  isbottomBarShow: boolean;
  toggleBottomBar: () => void;
};

const layoutContext = createContext<LAYOUTCONTEXTYPE>({} as never);

export const LayoutContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isbottomBarShow, setIsbottomBarShow] = useState<boolean>(true);

  const toggleBottomBar = () => {
    setIsbottomBarShow(!isbottomBarShow);
  };

  return (
    <layoutContext.Provider value={{ isbottomBarShow, toggleBottomBar }}>
      {children}
    </layoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(layoutContext);

  if (!context) {
    throw new Error("useLayout must be used within a LayoutContextProvider");
  }

  return context;
};
