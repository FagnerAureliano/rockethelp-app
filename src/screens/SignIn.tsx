import { Heading, Icon, useTheme, VStack } from "native-base";
import { Envelope, Key } from "phosphor-react-native";
import { useState } from "react";

import Logo from "../assets/logo_primary.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
  const { colors } = useTheme();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    console.log(name, password);
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={19} mb={2}>
       Acesse sua conta
      </Heading>
      <Input
        mb={4}
        placeholder="E-mail"
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
        }
        onChangeText={setName}
      />
      <Input
        mb={4}
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Entrar" w="full" onPress={handleSignIn} />
    </VStack>
  );
}
