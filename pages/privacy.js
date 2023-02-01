import { Button, Flex, Text, Link, useToast } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function Privacy() {
  const router = useRouter();
  const toast = useToast();
  return (
    <>
      <Head>
        <title>PicAnswer - Privacy Policy</title>
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
          <Text fontSize={"35pt"}>Privacy Policy</Text>
          <br />
          <Text>
            Introduction: PicAnswer is a photo-taking app that integrates
            artificial intelligence to provide users with solutions to their
            problems. We take the privacy of our users very seriously and are
            committed to protecting the personal information that you provide to
            us.
            <br />
            <br />
            1.&nbsp;&nbsp;Collection of Personal Information: PicAnswer collects
            information from its users, including but not limited to, names,
            email addresses, and other contact information. Additionally, when
            you use the app, we may collect information about the photos you
            take and any text or other information that you provide in
            connection with your use of the app.
            <br />
            <br />
            2.&nbsp;&nbsp;Use of Personal Information: PicAnswer uses the
            personal information collected from its users to provide the app's
            services, to improve the app, and to send promotional emails and
            other communications to users. We may also use your personal
            information to respond to your inquiries and to provide customer
            support.
            <br />
            <br />
            3.&nbsp;&nbsp;Sharing of Personal Information: PicAnswer will not
            sell, rent, or otherwise share your personal information with third
            parties, except as described in this policy or as required by law.
            We may share your personal information with our affiliates, agents,
            and service providers for the purpose of providing the app's
            services, and we may also disclose your personal information to law
            enforcement, government agencies, or other third parties as required
            by law.
            <br />
            <br />
            4.&nbsp;&nbsp;Security: PicAnswer takes appropriate security
            measures to protect against unauthorized access, alteration, or
            destruction of personal information. However, no internet-based
            system can be completely secure, and we cannot guarantee the
            security of your personal information.
            <br />
            <br />
            5.&nbsp;&nbsp;Retention of Personal Information: PicAnswer will
            retain your personal information for as long as is necessary to
            provide the app's services or as required by law.
            <br />
            <br />
            6.&nbsp;&nbsp;Changes to Privacy Policy: PicAnswer may modify this
            privacy policy from time to time without prior notice. Your
            continued use of the app after any changes indicates your acceptance
            of the new privacy policy.
            <br />
            <br />
            7.&nbsp;&nbsp;Contact Us: If you have any questions or concerns
            about this privacy policy, please contact us at [INSERT EMAIL
            ADDRESS OR CONTACT FORM].
            <br />
            <br />
            By using the PicAnswer app, you consent to the collection, use, and
            sharing of your personal information as described in this privacy
            policy. If you do not agree to these terms, you should not use the
            app.
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
