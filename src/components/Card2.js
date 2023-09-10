import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Divider,
  Stack,
  Button,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";

const Card2 = ({img,title}) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={img}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="outline" colorScheme="gray">
            Read More
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Card2;
