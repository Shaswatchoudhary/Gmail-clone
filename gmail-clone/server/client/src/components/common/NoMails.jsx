import { Box, Typography, styled, Divider } from '@mui/material';

const Component = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
    opacity: .8,
});

const StyledDivider = styled(Divider)({
    width: '100%',
    marginTop: 10
})

const NoMails = ({ message = {} }) => {
    // Provide default values if message is undefined or missing properties
    const { 
        heading = 'No messages', 
        subHeading = 'There are no messages to display.' 
    } = message || {};

    return (
        <Component>
            <Typography>{heading}</Typography>
            <Typography>{subHeading}</Typography>
            <StyledDivider />
        </Component>
    )
}

export default NoMails;