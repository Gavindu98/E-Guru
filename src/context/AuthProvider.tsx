import React, { Children, createContext, ReactElement, ReactNode, useState, useEffect } from "react";

const AuthContext = createContext<any>({});

interface Props {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const [auth, setAuth] = useState({ dateOfBirth: new Date() });

    //   useEffect(() => {
    //     if ((auth as any)._id) {
    //       fetchBalanceData()
    //     }
    //   }, [auth]);

    //   const fetchBalanceData = async () => {
    //     try {
    //       const stripeBalance = await StripeService.getUserStripeBalance();
    //       if (stripeBalance.success) {
    //         setStripeAccBalanceObj(stripeBalance.data);
    //       }
    //     } catch (error) {}
    //   };

    return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
