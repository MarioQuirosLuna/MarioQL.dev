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
        background: ${({ theme }) => theme.colors.backgroundTransparentColor};
    `}
`

export const NavbarButton = styled.div`
    display: flex;
    @media screen and (max-width: 1023px) {
        height: 70px;
        align-items: center;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 20;
        transition: all 300ms ease-out;
        transform: translateY(-70px);
    }

    @media screen and (min-width: 1024px) {
        justify-content: end;
    }

`

export const BurguerButton = styled.div`
    width: 30px;
    height: 50px;
    margin-left: auto;
    margin-right: 1em;
    position: relative;
    z-index: 30;
    outline: none;
    cursor: pointer;

    i{
        width: 100%;
        height: 3px;
        border-radius: 5px;
        position: absolute;
        transition: all 0.8s ease-out;
        background: ${({ theme }) => theme.colors.textTransparentColor};

        &:first-child{
            top: 10px;
        }
        &:nth-child(2){
            top: 20px;
        }
        &:nth-child(3){
            top: 30px;
        }
        &:last-child{
            top: 40px;
        }
    }

    &:hover{
        i{
            background: ${({ theme }) => theme.colors.textColor}; 
        }   
    }
    
    &.active{
        i{
            height: 5px;
            background: ${({ theme }) => theme.colors.textColor};          
            &:first-child{
                transform: rotate(45deg) translate(12px, 12px);
            }
            &:nth-child(2){
                transform:  rotate(45deg) translateY(5px);
            }
            &:nth-child(3){
                transform: rotate(-45deg) translateY(-5px);
            }
            &:last-child{
                
                transform: rotate(-45deg) translate(12px, -12px);
            }
        }
    }

    @media screen and (min-width: 768px) {
        width: 50px;
    }

    @media screen and (min-width: 1024px) {
        width: 50px;
        margin-top: 2em;
        margin-right: 2em;
        position: fixed;
        i{
            height: 5px;
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