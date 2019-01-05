import React from 'react'
import { Box, Text, Heading, Image } from 'gestalt'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="around"
      height={70}
      color="midnight"
      padding={1}
      shape="roundedBottom"
    >
      {/* Sign In Link */}
      <NavLink activeClassName="active" to="/signin">
        <Text size="xl" color="white">
          Sign In
        </Text>
      </NavLink>

      {/* Title and Logo */}
      <NavLink activeClassName="active" exact to="/">
        <Box display="flex" alignItems="center">
          <Box margin={2} height={50} width={50}>
            <Image
              alt="BrewStock Logo"
              naturalHeight={1}
              naturalWidth={1}
              src="./icons/logo.svg"
            />
          </Box>
          {/* Title */}
          <div className="main-title">
            <Heading size="xs" color="orange">
              BrewStock
            </Heading>
          </div>
        </Box>
      </NavLink>

      {/* Sign Up Link */}
      <NavLink activeClassName="active" to="/signup">
        <Text size="xl" color="white">
          Sign Up
        </Text>
      </NavLink>
    </Box>
  )
}

export default Navbar
