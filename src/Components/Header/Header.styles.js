import styled, { css } from 'styled-components'

export const HeaderBackground = styled.div`
    position: fixed;
    height: 70px;
    width: 100%;
    top: 0;
    z-index: 10;
    transition: all 0.3s ease-out;
    transform: translateY(-70px);

    ${({ isDark }) => 
		isDark && css`
        background: ${({ theme }) => theme.colors.textColor};
    `}
`

export const Navbar = styled.div`

`

export const NavbarButton = styled.div`

`

export const BurguerButton = styled.div`
    width: 50px;
    height: 50px;
    margin-left: auto;
    position: relative;
    z-index: 30;
    outline: none;
    cursor: pointer;

    i{
        width: 100%;
        height: 3px;
        position: absolute;
        transition: all 0.4s ease-out;
        background: ${({ theme }) => theme.colors.textColor};

        &:first-child{
            top: 10px;
            width: 60%;
        }
        &:nth-child(2){
            top: 20px;
            width: 80%;
        }
        &:nth-child(3){
            top: 30px;
        }
        &:nth-child(4){
            top: 40px;
            width: 80%;
        }
        &:last-child{
            top: 50px;
            width: 60%;
        }
    }

    &.active{
        i{
            &:first-child{
                right: 0;
            }
            &:nth-child(2){
                right: 0;
            }
            &:nth-child(3){
                
            }
            &:nth-child(4){
                right: 0;
            }
            &:last-child{
                right: 0;
            }
        }
    }
`

export const NavbarMenu = styled.nav`
    display: ${({ menu }) => (menu ? 'flex' : 'none')};
    user-select: none;

    @media screen and (min-width: 1024px) {
        justify-content: flex-end;
        grid-area: auto / margin1-start / auto / margin4-end;
    }
`

export const MenuContainer = styled.div`
    padding-right: 30px;
    position: fixed;
    top: 70px;
    right: 0;
    bottom: 0;
    z-index: 30;
    text-align: right;
    overflow-y: auto;

    a {
        display: inline-flex;
        align-items: center;
        justify-content: flex-end;
        transform: translateY(200%);
    }

    @media screen and (min-width: 1024px) {
        padding-right: 80px;
        top: 120px;
        right: unset;
    }
`