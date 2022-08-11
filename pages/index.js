import { useTheme as useNextTheme } from "next-themes"
import { Button, Modal, Switch, useTheme, Text, Input, Row, Checkbox, Card, Col, Spacer } from "@nextui-org/react"
import { useState } from "react";

export default function Home() {

  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <>
     
    </>
  )
}
