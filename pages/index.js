import { useTheme as useNextTheme } from "next-themes"
import { Button, Modal, Switch, useTheme, Text, Input, Row, Checkbox, Card, Col, Spacer } from "@nextui-org/react"
import { useState } from "react";

export default function Home() {

  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(!visible);
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <>
      <p>The current theme : {type}</p>
      <Switch 
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
      <Button
        onClick={handler}
        auto
        color="warning"
        shadow
      >
        Ouvrir la modale
      </Button>
      <Spacer />
      <Card isHoverable isPressable css={{ w: "50%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
              Your day your way
            </Text>
            <Text h3 color="white">
              Your checklist for better sleep
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image 
            src="https://nextui.org/images/card-example-5.jpeg"
            objectFit="cover"
            width="100%"
            height="100%"
            alt="Relaxing app background"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#0f111466",
            borderTop: "$borderWeights$light solid $gray800",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Row>
                <Col span={3}>
                  <Card.Image
                    src="https://nextui.org/images/breathing-app-icon.jpeg"
                    css={{ bg: "black", br: "50%" }}
                    height={40}
                    width={40}
                    alt="Breathing app icon"
                  />
                </Col>
                <Col>
                  <Text color="#d1d1d1" size={12}>
                    Breathing App
                  </Text>
                  <Text color="#d1d1d1" size={12}>
                    Get a good night's sleep.
                  </Text>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button
                  flat
                  auto
                  rounded
                  css={{ color: "#94f9f0", bg: "#94f9f026" }}
                >
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Get App
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      <Modal
        open={visible}
        onClose={closeHandler}
        blur
        closeButton
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to 
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            type="password"
            placeholder="Password"
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
