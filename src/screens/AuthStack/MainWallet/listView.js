import React from "react"
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
} from "native-base"
export const ListView = () => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Bitcoin",
      coin: "$40,000.06",
      negative:"-0.8%",
      recentText: "0 BTC",
      avatarUrl:
        "https://s3-alpha-sig.figma.com/img/ef09/51cc/1fa0256f00f29c9242f998341e01c599?Expires=1633910400&Signature=VZ-BMS5otLSARLV53n8EOnAE7uvK~jwJ50CRVWwy1495gV~ouXZOOfX355SrVMufBDnRT0M6rTo6v4QzdsHLPLBk0X8hWToyvf1WgD9EiWeJb1ahrVmiKcuK3aukzBuqaFzPgngSRwotzR3adnqcAfWzEct5w47Tfpz6i6bRIJTFjg5Ia9w7qf~9xQz8BAcVgiCX8rvrZ68gO2Z70lGg~mPEqNzyyN7xodzCPg88llisNpp1IDZEgMaDI2kfhWoer7~zlKjBXpyUrxA1rG0rMmV0HWvc7ZSiyXysmZRfFhEDjvevpdW~Uw11Q6OhnB-XElrwwFaybBp3GSHyTXNcmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
     {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Bitcoin",
      coin: "$40,000.06",
      negative:"-0.8%",
      recentText: "0 BTC",
      avatarUrl:
        "https://s3-alpha-sig.figma.com/img/ef09/51cc/1fa0256f00f29c9242f998341e01c599?Expires=1633910400&Signature=VZ-BMS5otLSARLV53n8EOnAE7uvK~jwJ50CRVWwy1495gV~ouXZOOfX355SrVMufBDnRT0M6rTo6v4QzdsHLPLBk0X8hWToyvf1WgD9EiWeJb1ahrVmiKcuK3aukzBuqaFzPgngSRwotzR3adnqcAfWzEct5w47Tfpz6i6bRIJTFjg5Ia9w7qf~9xQz8BAcVgiCX8rvrZ68gO2Z70lGg~mPEqNzyyN7xodzCPg88llisNpp1IDZEgMaDI2kfhWoer7~zlKjBXpyUrxA1rG0rMmV0HWvc7ZSiyXysmZRfFhEDjvevpdW~Uw11Q6OhnB-XElrwwFaybBp3GSHyTXNcmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Ethereum",
      coin: "$40,000.06",
      negative:"-0.8%",
      recentText: "0 ETH",
      avatarUrl:
        "https://s3-alpha-sig.figma.com/img/e302/bc89/a77df3710c66cabdd39db371412252a1?Expires=1633910400&Signature=T2hbQSUp2jLrTyMmQSnrSlsTXcW1k8eQ5gSROKPB1f25alsgi~ih32lfEcs2mO9pRzY4wSuUMXUKZcNQBMbgTCK~6Ha4HFBCo80O80kN3S0eMk-kCE4v9-pHjbObxwGuYPg4ft47NDj-HU1B0aFkqXLyG1tuvZ68YYUfPav5yrt0~UFYMZ7GHUjWkhEP2BdjlOjEwfFikdmLOeypnJ1nxUsJ6VsBvCyR7gbnYjFAAn-w4Q-~1Vy6EF-ao~iU6OLKXWy8~sBM7bpRj9pjnZUidOkUFWBm2QTX~LtSN1Cx6N~NdodHc-~u8K8oxm8Wu31wauBXGfdONZqa1sH4srwB~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "BNB",
      coin: "$40,000.06",
      negative:"-0.8%",
      recentText: "0 BNB",
      avatarUrl: "https://s3-alpha-sig.figma.com/img/6e4e/136b/36898808c20dc6b26afa4f51f4a1fda5?Expires=1633910400&Signature=d~EQ9QivX~SvUpH1r8QvVCxyH1UTDjjSkrcNSKtUvBpJ12lRKRR~F7zVswo5oXbXt-4mH3c-2f6hn1VCAtB2i~etZzUNyuB73xotMvSaP8Ead937WUz5TbS-OV-UiGmITX3gFyTAd56qTIRE6Zz3gyBVNIOdAjcBB58r9YByO9OaqlOiasksbonoztRDrVNYcG8vvtApYOnHVDnQhYPeC6WlvxHYxIk2St3-CJGKAYg0tjr3bXTsRpe64w3Xdgs3Uu0aBDA3NepZFztkwMDTDBm4lbCmDjab4PA9dnEspIBeFGHbKI1xr-NdyDjryx0NyrK86mlsQKPPPNJx4-MJcg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Smart Chain",
      coin: "$40,000.06",
      negative:"-0.8%",
      recentText: "0 BNB",
      avatarUrl:
        "https://s3-alpha-sig.figma.com/img/8b69/a132/7a2a546f11449ecc2715f849bd759f9e?Expires=1633910400&Signature=XLXvCzaepfD25a5CYujRGMp95oLE2hZ0CBXMGFr72FLCedkaD5j-nqjgZk363UP4ShluyjfE2tYaate7uYNUC7QCoxZw8HEhw1OPu2EBzxPcSKqD3CA00cUJwfvUffWlwxl1OwQ4KXWc-epM2Acvq~OYY5HTUSJ2wyhEIBKaN-VmzLbg~JUx3eD0nfstEVd6CObE3XSIppAjYDPRawOQOdeWa1IJyrI-TItIf-1vAopNrPdxpzlStVWLxi-6R4CN8p8x5y5-Hlbedh0bCXu~hXkctj4Ja8oYKB08pMu-AqjGyqHEemCKkdqzSK-bLnaBwm9W0UfXdSSiSjtfJUYIqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    }
  ]
  return (
    <NativeBaseProvider>
    <Center flex="1" >
    <Box
      w={{
        base: "100%",
        md: "100%",
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={3} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.fullName}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.coin} <Text style={{color:'red'}}>{item.negative}</Text>
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                alignSelf="flex-start"
              >
                {item.recentText}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
    </Center>
    </NativeBaseProvider>
  )
}

