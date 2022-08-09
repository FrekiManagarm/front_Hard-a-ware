import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, withRouter } from "next/router";
import dynamic from "next/dynamic";
import Sticky from "react-stickynode";
import { Button, Text } from "@nextui-org/react";
import HeaderWrapper, {
    MobileNavbar,
    CloseDrawer,
    AvatarImage,
    AvatarInfos,
    AvatarWrapper,
    LogoArea
} from "./Header.style";
import { getDeviceType } from '../../../helpers/get_device_type';