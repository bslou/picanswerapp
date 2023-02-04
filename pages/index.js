import { Button, Flex, Text, Link, useToast } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const toast = useToast();
  return (
    <>
      <Head>
        <title>
          PicAnswer - Answer any question you have by just taking a picture
        </title>
        <meta
          name="description"
          content="PicAnswer integrated AI within picture taking, so now you can take
          pictures and use ChatGPT in order to solve any problem you have."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction={"column"}
        alignItems={"center"}
        backgroundColor={"#efefef"}
        width={"100vw"}
        gap={8}
      >
        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
          paddingLeft={5}
          paddingTop={0}
        >
          <Button
            colorScheme={"transparent"}
            fontFamily={"sans-serif"}
            color={"black"}
            onClick={() => router.push("/")}
          >
            📷 PicAnswer
          </Button>
          <Button
            onClick={() =>
              toast({
                title: "App is not released yet",
                status: "info",
                duration: 9000,
                isClosable: true,
              })
            }
            colorScheme={"transparent"}
            width={250}
            height={100}
          >
            <Image
              src={"/assets/appstore.png"}
              alt={"App Store Download - PicAnswer"}
              layout={"fill"}
            />
          </Button>
        </Flex>
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"55%"}
          gap={2}
        >
          <Text
            fontWeight={500}
            fontSize={{ base: "20pt", md: "30pt", lg: "40pt" }}
            textAlign={"center"}
            fontFamily={"sans-serif"}
          >
            Answer any question you have with a click of a button.
          </Text>
          <Text
            color={"gray"}
            fontSize={{ base: "11pt", md: "16pt", lg: "21pt" }}
            textAlign={"center"}
            fontFamily={"sans-serif"}
            fontWeight={300}
          >
            PicAnswer integrated AI within picture taking, so now you can take
            pictures and use ChatGPT in order to solve any problem you have.
            <b>(Note: doesn't solve graphs or non-worded pictures yet)</b>
          </Text>
        </Flex>
        <Button
          onClick={() =>
            toast({
              title: "App is not released yet",
              status: "info",
              duration: 9000,
              isClosable: true,
            })
          }
          colorScheme={"transparent"}
          width={320}
          height={130}
        >
          <Image
            src={"/assets/appstore.png"}
            alt={"App Store Download - PicAnswer"}
            layout={"fill"}
          />
        </Button>
        <video
          controls
          src={"/assets/RPReplay.mp4"}
          style={{ width: "80vw", height: "400px" }}
        />
        <br />
        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100vw"}
          borderTop={"1px solid #cdcdcd"}
          paddingTop={5}
          paddingBottom={5}
          gap={10}
        >
          <Link
            color={"gray"}
            onClick={() =>
              router.push(
                "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRQKmTFrqpgZTsSwWvzQgWcmNkZkFdspqcQdZstvkMNJSRprkVTgvcVRKqxjsCnkTbQmpq"
              )
            }
            passHref
            target={"_blank"}
          >
            Contact
          </Link>
          <Link
            color={"gray"}
            onClick={() => router.push("/privacy")}
            target={"_blank"}
          >
            Privacy
          </Link>
          <Link
            color={"gray"}
            onClick={() => router.push("/terms")}
            target={"_blank"}
          >
            Terms
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
