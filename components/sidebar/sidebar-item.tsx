import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import { useSidebarContext } from "../layout/layout-context";
import clsx from "clsx";
// import { Flex } from "../styles/flex";

interface Props {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  href?: string;
}

export const SidebarItem = ({ icon, title, isActive, href = "" }: Props) => {
  const { collapsed, setCollapsed } = useSidebarContext();

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed();
    }
  };
  return (
    <NextLink
      href={href}
      // as={NextLink}
      className="text-default-900 active:bg-none max-w-full"
      //   css={{
      //  color: "$accents9",
      //  maxWidth: "100%",
      //   }}
    >
      <div
        className={clsx(
          isActive
            ? "bg-primary-100 [&_svg_path]:fill-primary-500"
            : "hover:bg-default-100",
          "flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]"
        )}
        onClick={handleClick}
        //  css={{
        //    gap: "$6",
        //    width: "100%",
        //    minHeight: "44px",
        //    height: "100%",
        //    alignItems: "center",
        //    px: "$7",
        //    borderRadius: "8px",
        //    cursor: "pointer",
        //    transition: "all 0.15s ease",
        //    "&:active": {
        //      transform: "scale(0.98)",
        //    },
        //    ...(isActive
        //      ? {
        //          bg: "$blue200",
        //          "& svg path": {
        //            fill: "$blue600",
        //          },
        //        }
        //      : { "&:hover": { bg: "$accents2" } }),
        //  }}
        //  align={"center"}
      >
        {icon}
        <span
          className="text-default-900"
          // weight={'normal'}
          // size={'$base'}
          // css={{
          //    color: '$accents9',
          // }}
        >
          {title}
        </span>
      </div>
    </NextLink>
  );
};
