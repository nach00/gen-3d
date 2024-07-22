import { Box, OrbitControls } from "@react-three/drei";
import { Container, Root } from "@react-three/uikit";

export default function Experience() {
  return (
    <>
      <OrbitControls />
      <Root backgroundColor="red" sizeX={2} sizeY={1} flexDirection="row">
        <Container flexGrow={1} margin={4} backgroundColor="green">
          <Box args={[1, 1, 1]} position={[0, 0, 0]} />
        </Container>
        <Box args={[1, 1, 1]} position={[0, 0, 0]} />
        <Container flexGrow={1} margin={4} backgroundColor="blue" />
        <Container flexDirection="column" md={{ flexDirection: "row" }}>
          <Box args={[1, 1, 1]} position={[0, -1, 0]} />
          <Box args={[1, 1, 1]} position={[0, 0, 0]} />
          <Box args={[1, 1, 1]} position={[0, 1, 0]} />
        </Container>
      </Root>
    </>
  );
}
