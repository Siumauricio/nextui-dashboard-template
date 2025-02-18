"use server";

import { cookies } from "next/headers";

export const createAuthCookie = async () => {
  (await cookies()).set("userAuth", "myToken", { secure: true });
};

export const deleteAuthCookie = async () => {
  (await cookies()).delete("userAuth");
};
