import React, { useContext } from "react";
import { UserContext } from "../../Providers/UserContext/UserContext";
import { IconBtn } from "../IconButton";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HeaderContainer } from "./style";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  Avatar,
  AvatarBadge,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { GameContext } from "../../Providers/GameContext/GameContext";
import { CardCartList } from "../CartList/CardCartList";
import { CartTotalValue } from "../CartList/CardCartList/CartValueTotal";

export const Header = () => {
  const { user, navigate, userLogout } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const { currentSale, removeProduct, removeAllProduct, amount } =
    useContext(GameContext);

  return (
    <HeaderContainer>
      <div>
        <Link to={"/"}>Home</Link>
        <Link className="gamestore" to={"/gameStore"}>
          GameStore
        </Link>
        <Link to={"/"}>News</Link>
      </div>
      <nav>
        <div className="cartContainer">
          <IconBtn
            selectedIcon={
              <IconContext.Provider value={{ color: "white", size: "25px" }}>
                <HiOutlineShoppingCart onClick={onOpen} />
              </IconContext.Provider>
            }
          />
          <span>
            <p>{currentSale.length}</p>
          </span>
        </div>
        {user ? (
          <>
            <Menu>
              <MenuButton className="menuPos">
                <Avatar
                  size={"sm"}
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                >
                  <AvatarBadge boxSize="20px" bg="green.500" />
                </Avatar>
              </MenuButton>
              <MenuList bg={"gray.900"}>
                <MenuItem className="logout" onClick={userLogout} bg={"gray.900"}>
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </>
        ) : (
          <div className="btnsLogReg">
            <button onClick={() => navigate("/register")}>Cadastrar</button>
            <button onClick={() => navigate("/login")}>Login</button>
          </div>
        )}
      </nav>
      <>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={"black"}>
            <DrawerCloseButton />
            <DrawerHeader fontWeight={"bold"} fontSize={"lg"}>
              "Carrinho de Compras"
            </DrawerHeader>
            <DrawerBody className="drawer_body">
              {currentSale.map((product) => (
                <CardCartList
                  key={product.id}
                  product={product}
                  removeProduct={removeProduct}
                />
              ))}
            </DrawerBody>
            <CartTotalValue />
            <DrawerFooter>
              <Button
                variant="outline"
                mr={3}
                color="pink.900"
                onClick={onClose}
              >
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </HeaderContainer>
  );
};
