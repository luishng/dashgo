import { Box, Flex, Text, Avatar } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Luis Henrique</Text>
          <Text color="gray.300" fontSize="small">luishng@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Luis Henrique" src="https://github.com/luishng.png" />
    </Flex>
  )
}