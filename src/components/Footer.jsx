import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
function Footer() {
  return (
    <div style={{backgroundColor:'cyan'}}>
        <Navbar expand="lg" className="bg-body-darkcyan">
      <Container >
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav.Link href="https://www.instagram.com/neethusunder/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><img src="https://lh5.googleusercontent.com/GSVdNT99P91u-zPD66a6kZP3MCuwYD90QzOsU7ZW0uXP-LwcLgpt60qbxLdI_bMwikJBHwL62mAZNk1VEOEt95I9Job0tu-HrCJZVNnIUA" alt="" /></Nav.Link>
        <Nav.Link href='mailto:neethusunder18@gmail.com'><img src="https://lh6.googleusercontent.com/YEewQvxd_EzfCnGrLp8pnqxJWlCZO0XMwz_caayEAi7CAxkdZfYyPR7ChnYUj6AjdrzlGw6oDaAOnfJdg9HlmhUYXTQWgUtWWQJBZegl8lY" alt="" /></Nav.Link>
        <Nav.Link href='https://www.linkedin.com/in/neethu-sunder-25231b90/?originalSubdomain=in'><img src="https://lh3.googleusercontent.com/6VkCmU6_9dg2znEYZZ966OBXi6sJ5RqIRDt48xPS3Xb3iB8-lblUnPOtxTMP39C2ipgFIoaxftTAbWnkza0z04DvueS-mw8Zvoa-7ik5NSg" alt="" /></Nav.Link>
        </Container>
        </Navbar>
    </div>
  )
}

export default Footer