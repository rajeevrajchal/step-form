import React from 'react';
import {Box, Button, Flex, VStack} from "@chakra-ui/react";
import PropTypes from "prop-types";

const StepperLayout = (props) => {
    const {children, onNext, onPrev} = props
    return (
        <Box>
            <VStack
                spacing={4}
                align="stretch"
            >
                <Box>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, et!
                </Box>
                <Box >
                    {
                        children
                    }
                </Box>
                <Box>
                    <Flex justifyContent='space-between' alignContent="center">
                        <Button colorScheme="blue" onClick={onPrev}>Prev</Button>
                        <Button colorScheme="blue" onClick={onNext}> Next / Skip </Button>
                    </Flex>
                </Box>
            </VStack>
        </Box>
    );
};

StepperLayout.propTypes = {
    children: PropTypes.any.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired
};

export default StepperLayout;
