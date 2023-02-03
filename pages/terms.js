import { Button, Flex, Text, Link, useToast } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function Terms() {
  const router = useRouter();
  const toast = useToast();
  return (
    <>
      <Head>
        <title>PicAnswer - Terms & Conditions</title>
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
          width={"50%"}
        >
          <Text fontSize={{ base: "25pt", md: "30pt", lg: "35pt" }}>
            Terms & Conditions
          </Text>
          <br />
          <Text fontSize={{ base: "8pt", md: "10pt", lg: "12pt" }}>
            Introduction: PicAnswer is a photo-taking app that integrates
            artificial intelligence to provide users with solutions to their
            problems. By using PicAnswer, you agree to be bound by these terms
            and conditions. <br />
            <br />
            1.&nbsp;&nbsp;User Account: To use the app, you must create an
            account. You are responsible for maintaining the confidentiality of
            your account information and for any activities that occur under
            your account. <br />
            <br />
            2.&nbsp;&nbsp;User Content: When you use PicAnswer, you may provide
            pictures or other content. You retain ownership of any intellectual
            property rights that you hold in your content, but you grant
            PicAnswer a non-exclusive, royalty-free, transferable,
            sub-licensable, worldwide license to use, copy, modify, and
            distribute your content in connection with the PicAnswer services.
            <br />
            <br />
            3.&nbsp;&nbsp;Limitation of Liability: PicAnswer is not responsible
            for any damages or losses resulting from the use of the app,
            including without limitation, indirect, incidental, special,
            punitive, or consequential damages. <br />
            <br />
            4.&nbsp;&nbsp;Disclaimer of Warranties: PicAnswer provides the app
            on an "as is" and "as available" basis. PicAnswer makes no
            representations or warranties of any kind, express or implied, as to
            the operation of the app or the information, content, materials, or
            products included in the app.
            <br />
            <br />
            5.&nbsp;&nbsp;Indemnification: You agree to indemnify and hold
            PicAnswer harmless from any claims, losses, liabilities, damages, or
            expenses arising from your use of the app or from your breach of
            these terms and conditions. <br />
            <br />
            6.&nbsp;&nbsp;Changes to Terms: PicAnswer reserves the right to
            modify these terms and conditions at any time without prior notice.
            Your continued use of the app after any changes indicates your
            acceptance of the new terms. <br />
            <br />
            7.&nbsp;&nbsp;Governing Law: These terms and conditions are governed
            by the laws of the jurisdiction in which PicAnswer is headquartered
            and any applicable federal laws of the United States.
            <br />
            <br />
            By using the PicAnswer app, you agree to be bound by these terms and
            conditions. If you do not agree to these terms and conditions, you
            should not use the app.
          </Text>
        </Flex>
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
