import { Box, Card, Field, Stack, StatValueText } from "@chakra-ui/react"

interface ICard {
    mainContent: string
    content: string | number
}

export const InfoCard = ({mainContent, content}: ICard) =>{
    return(
        <Box>
            <Card.Root>
                <Card.Body gap= "2">
                    <Card.Title>
                        <Stack>
                            <Field.Root>
                                <Field.Label fontSize= "2xl" padding={5}>
                                    {mainContent}
                                </Field.Label>
                                <Field.Label fontSize="xl" padding={5}>
                                    {content}
                                </Field.Label>
                            </Field.Root>
                        </Stack>
                    </Card.Title>
                </Card.Body>
            </Card.Root>
        </Box>
    )
}