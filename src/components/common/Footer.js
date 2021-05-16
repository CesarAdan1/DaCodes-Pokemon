import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useClickOutside } from '../../hooks/useOnClick'
import '../../static/styles/footer.scss';
import PokemonFilterResultsView from '../../views/PokemonFilterResultsView';

const Footer = () => {
    //const [toggleSearch, setToggleSearch] = useState(false);

    // const ref = useRef();

    // useClickOutside(ref, () => {
    //     if (toggleSearch) setToggleSearch(false)
    // });

    return (
        <>
            <footer id="menu-new">
                <button className="iyM5vw Qkd66A ubW6qw fP4ZCw GnpDIA _5RSqIg fFOiLQ" type="button" title="Inicio">
                    <Link to="/" draggable="false">
                        <div className="_9wqIaw  TcNIhA">
                            <span aria-hidden="true" className=".NA_Img dkWypw">
                                <img
                                    alt="Home"
                                    width="15px"
                                    heigh="15px"
                                    src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMXB0IiB2aWV3Qm94PSIwIDEgNTExIDUxMS45OTkiIHdpZHRoPSI1MTFwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNDk4LjY5OTIxOSAyMjIuNjk1MzEyYy0uMDE1NjI1LS4wMTE3MTgtLjAyNzM0NC0uMDI3MzQzLS4wMzkwNjMtLjAzOTA2MmwtMjA4Ljg1NTQ2OC0yMDguODQ3NjU2Yy04LjkwMjM0NC04LjkwNjI1LTIwLjczODI4Mi0xMy44MDg1OTQtMzMuMzI4MTI2LTEzLjgwODU5NC0xMi41ODk4NDMgMC0yNC40MjU3ODEgNC45MDIzNDQtMzMuMzMyMDMxIDEzLjgwODU5NGwtMjA4Ljc0NjA5MyAyMDguNzQyMTg3Yy0uMDcwMzEzLjA3MDMxMy0uMTQ0NTMyLjE0NDUzMS0uMjEwOTM4LjIxNDg0NC0xOC4yODEyNSAxOC4zODY3MTktMTguMjUgNDguMjE4NzUuMDg5ODQ0IDY2LjU1ODU5NCA4LjM3ODkwNiA4LjM4MjgxMiAxOS40NDE0MDYgMTMuMjM0Mzc1IDMxLjI3MzQzNyAxMy43NDYwOTMuNDg0Mzc1LjA0Njg3Ni45Njg3NS4wNzAzMTMgMS40NTcwMzEuMDcwMzEzaDguMzIwMzEzdjE1My42OTUzMTNjMCAzMC40MTc5NjggMjQuNzUgNTUuMTY0MDYyIDU1LjE2Nzk2OSA1NS4xNjQwNjJoODEuNzEwOTM3YzguMjg1MTU3IDAgMTUtNi43MTg3NSAxNS0xNXYtMTIwLjVjMC0xMy44Nzg5MDYgMTEuMjkyOTY5LTI1LjE2Nzk2OSAyNS4xNzE4NzUtMjUuMTY3OTY5aDQ4LjE5NTMxM2MxMy44Nzg5MDYgMCAyNS4xNjc5NjkgMTEuMjg5MDYzIDI1LjE2Nzk2OSAyNS4xNjc5Njl2MTIwLjVjMCA4LjI4MTI1IDYuNzE0ODQzIDE1IDE1IDE1aDgxLjcxMDkzN2MzMC40MjE4NzUgMCA1NS4xNjc5NjktMjQuNzQ2MDk0IDU1LjE2Nzk2OS01NS4xNjQwNjJ2LTE1My42OTUzMTNoNy43MTg3NWMxMi41ODU5MzcgMCAyNC40MjE4NzUtNC45MDIzNDQgMzMuMzMyMDMxLTEzLjgxMjUgMTguMzU5Mzc1LTE4LjM2NzE4NyAxOC4zNjcxODctNDguMjUzOTA2LjAyNzM0NC02Ni42MzI4MTN6bS0yMS4yNDIxODggNDUuNDIxODc2Yy0zLjIzODI4MSAzLjIzODI4MS03LjU0Mjk2OSA1LjAyMzQzNy0xMi4xMTcxODcgNS4wMjM0MzdoLTIyLjcxODc1Yy04LjI4NTE1NiAwLTE1IDYuNzE0ODQ0LTE1IDE1djE2OC42OTUzMTNjMCAxMy44NzUtMTEuMjg5MDYzIDI1LjE2NDA2Mi0yNS4xNjc5NjkgMjUuMTY0MDYyaC02Ni43MTA5Mzd2LTEwNS41YzAtMzAuNDE3OTY5LTI0Ljc0NjA5NC01NS4xNjc5NjktNTUuMTY3OTY5LTU1LjE2Nzk2OWgtNDguMTk1MzEzYy0zMC40MjE4NzUgMC01NS4xNzE4NzUgMjQuNzUtNTUuMTcxODc1IDU1LjE2Nzk2OXYxMDUuNWgtNjYuNzEwOTM3Yy0xMy44NzUgMC0yNS4xNjc5NjktMTEuMjg5MDYyLTI1LjE2Nzk2OS0yNS4xNjQwNjJ2LTE2OC42OTUzMTNjMC04LjI4NTE1Ni02LjcxNDg0NC0xNS0xNS0xNWgtMjIuMzI4MTI1Yy0uMjM0Mzc1LS4wMTU2MjUtLjQ2NDg0NC0uMDI3MzQ0LS43MDMxMjUtLjAzMTI1LTQuNDY4NzUtLjA3ODEyNS04LjY2MDE1Ni0xLjg1MTU2My0xMS44MDA3ODEtNC45OTYwOTQtNi42Nzk2ODgtNi42Nzk2ODctNi42Nzk2ODgtMTcuNTUwNzgxIDAtMjQuMjM0Mzc1LjAwMzkwNiAwIC4wMDM5MDYtLjAwMzkwNi4wMDc4MTItLjAwNzgxMmwuMDExNzE5LS4wMTE3MTkgMjA4Ljg0NzY1Ni0yMDguODM5ODQ0YzMuMjM0Mzc1LTMuMjM4MjgxIDcuNTM1MTU3LTUuMDE5NTMxIDEyLjExMzI4MS01LjAxOTUzMSA0LjU3NDIxOSAwIDguODc1IDEuNzgxMjUgMTIuMTEzMjgyIDUuMDE5NTMxbDIwOC44MDA3ODEgMjA4Ljc5Njg3NWMuMDMxMjUuMDMxMjUuMDY2NDA2LjA2MjUuMDk3NjU2LjA5Mzc1IDYuNjQ0NTMxIDYuNjkxNDA2IDYuNjMyODEzIDE3LjUzOTA2My0uMDMxMjUgMjQuMjA3MDMyem0wIDAiLz48L3N2Zz4=" />                    </span>
                            <div className="eRxiIQ UXYZvg">Inicio</div>
                        </div>
                    </Link>
                </button>
                <button className="iyM5vw Qkd66A ubW6qw fP4ZCw GnpDIA _5RSqIg fFOiLQ" type="button" title="Pedidos">
                        <div className="footer--item">
                            <span aria-hidden="true" className=".NA_Img dkWypw">
                                <img
                                    alt="Pokeball"
                                    width="15px"
                                    heigh="15px"
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDEyNi4zMzQgMTI2LjMzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI2LjMzNCAxMjYuMzM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkYxQTFBOyIgY3g9IjYzLjE2NyIgY3k9IjYzLjE2NiIgcj0iNjEuNjY3Ii8+DQoJPC9nPg0KCTxnPg0KCQk8ZWxsaXBzZSBzdHlsZT0iZmlsbDojRDYwOTA5OyIgY3g9IjYzLjE2NyIgY3k9IjYzLjE2NiIgcng9IjYxLjY2NyIgcnk9IjQ3LjIzMiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xLjUsNjMuMTY2YzAsMzQuMDYxLDI3LjYwOSw2MS42NjgsNjEuNjY3LDYxLjY2OHM2MS42NjctMjcuNjA3LDYxLjY2Ny02MS42NjhIMS41eiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0Q4RTVFQTsiIGQ9Ik02My4xNjcsMTEwLjM5OGMzNC4wNTgsMCw2MS42NjctMjEuMTQ4LDYxLjY2Ny00Ny4yMzJIMS41DQoJCQlDMS41LDg5LjI1LDI5LjEwOSwxMTAuMzk4LDYzLjE2NywxMTAuMzk4eiIvPg0KCTwvZz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTYzLjE2NywwQzI4LjMzNiwwLDAsMjguMzM2LDAsNjMuMTY2YzAsMzQuODMxLDI4LjMzNiw2My4xNjgsNjMuMTY3LDYzLjE2OA0KCQlzNjMuMTY3LTI4LjMzNyw2My4xNjctNjMuMTY4QzEyNi4zMzQsMjguMzM2LDk3Ljk5OCwwLDYzLjE2NywweiBNNjMuMTY3LDNjMzIuNjczLDAsNTkuMzI4LDI2LjE4Myw2MC4xMjksNTguNjY2SDMuMDM4DQoJCUMzLjgzOSwyOS4xODMsMzAuNDk0LDMsNjMuMTY3LDN6IE02My4xNjcsMTIzLjMzNGMtMzIuNjczLDAtNTkuMzI4LTI2LjE4NC02MC4xMjktNTguNjY4aDEyMC4yNTgNCgkJQzEyMi40OTUsOTcuMTUsOTUuODQsMTIzLjMzNCw2My4xNjcsMTIzLjMzNHoiLz4NCgk8Zz4NCgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojQTdCQkMxOyIgY3g9IjYzLjE2NyIgY3k9IjY4Ljg2OCIgcj0iMTYuNzY0Ii8+DQoJPC9nPg0KCTxnPg0KCQk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBjeD0iNjMuMTY3IiBjeT0iNjMuMTY3IiByPSIxNi43NjQiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEOEU1RUE7IiBkPSJNNTEuMzEzLDc1LjAyMWMtNi41NDctNi41NDctNi41NDYtMTcuMTYsMC0yMy43MDljNi41NDctNi41NDYsMTcuMTYxLTYuNTQ2LDIzLjcwNywwIi8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTYzLjE2Nyw4MS40MzJjLTQuODc4LDAtOS40NjUtMS45LTEyLjkxNS01LjM1Yy03LjEyLTcuMTItNy4xMi0xOC43MDcsMC0yNS44Mw0KCQkJYzcuMTIyLTcuMTIsMTguNzA4LTcuMTIsMjUuODI5LDBsMCwwYzMuNDUsMy40NTEsNS4zNTEsOC4wMzgsNS4zNTEsMTIuOTE2YzAsNC44NzgtMS45LDkuNDY1LTUuMzUxLDEyLjkxNQ0KCQkJQzcyLjYzMiw3OS41MzIsNjguMDQ2LDgxLjQzMiw2My4xNjcsODEuNDMyeiBNNjMuMTY3LDQ3LjkxYy0zLjkwOSwwLTcuODE3LDEuNDg3LTEwLjc5Myw0LjQ2M2MtNS45NSw1Ljk1My01Ljk1LDE1LjYzNywwLDIxLjU4OA0KCQkJYzIuODgzLDIuODgzLDYuNzE2LDQuNDcxLDEwLjc5Myw0LjQ3MWM0LjA3NywwLDcuOTEtMS41ODgsMTAuNzkyLTQuNDcxYzIuODgzLTIuODgzLDQuNDcyLTYuNzE2LDQuNDcyLTEwLjc5Mw0KCQkJYzAtNC4wNzctMS41ODgtNy45MS00LjQ3Mi0xMC43OTRDNzAuOTg1LDQ5LjM5OCw2Ny4wNzYsNDcuOTEsNjMuMTY3LDQ3LjkxeiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik02OC44NzEsNjguODdjLTMuMTQ5LDMuMTQ2LTguMjU3LDMuMTQ2LTExLjQwNCwwYy0zLjE0OS0zLjE1LTMuMTQ4LTguMjU1LDAtMTEuNDAzDQoJCQljMy4xNDgtMy4xNSw4LjI1NS0zLjE0OCwxMS40MDMsMEM3Mi4wMTksNjAuNjE1LDcyLjAxOSw2NS43Miw2OC44NzEsNjguODd6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRDhFNUVBOyIgZD0iTTU3LjQ2Nyw1Ny40NjdjMy4xNDgtMy4xNSw4LjI1NS0zLjE0OCwxMS40MDMsMGMzLjE0OCwzLjE0OCwzLjE0OCw4LjI1MywwLjAwMSwxMS40MDMiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjMuMTY4LDcyLjcyNWMtMi40NSwwLTQuODk4LTAuOTMxLTYuNzYyLTIuNzk0Yy0zLjcyOS0zLjczLTMuNzI5LTkuNzk3LDAtMTMuNTI1DQoJCQljMS44MDUtMS44MDcsNC4yMDctMi44MDIsNi43NjEtMi44MDJjMCwwLDAsMCwwLDBjMi41NTUsMCw0Ljk1NywwLjk5Niw2Ljc2MywyLjgwMmMzLjcyOCwzLjcyNywzLjcyOCw5Ljc5NCwwLjAwMSwxMy41MjQNCgkJCWMwLDAsMCwwLjAwMS0wLjAwMSwwLjAwMUM2OC4wNjYsNzEuNzk0LDY1LjYxNyw3Mi43MjUsNjMuMTY4LDcyLjcyNXogTTYzLjE2Nyw1Ni42MDRjLTEuNzUzLDAtMy40MDEsMC42ODMtNC42NCwxLjkyMw0KCQkJYy0yLjU1OSwyLjU1OS0yLjU1OSw2LjcyMywwLDkuMjgyYzIuNTU4LDIuNTU3LDYuNzIzLDIuNTU3LDkuMjgzLDBjMi41NTgtMi41NiwyLjU1Ny02LjcyNC0wLjAwMS05LjI4Mg0KCQkJQzY2LjU3LDU3LjI4OCw2NC45MjEsNTYuNjA1LDYzLjE2Nyw1Ni42MDRMNjMuMTY3LDU2LjYwNHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" 
                                />
                            </span>
                            <span className="eRxiIQ UXYZvg">Catched 'em</span>
                        </div>
                </button>
                <button
                    className="iyM5vw Qkd66A ubW6qw fP4ZCw GnpDIA _5RSqIg fFOiLQ"
                    type="button"
                    title="Menu"
                    onClick={() => setToggleSearch(!toggleSearch)}
                >
                    <div className="footer--item">
                        <span aria-hidden="true"
                            className=".NA_Img dkWypw">
                            <img
                                alt="Search"
                                width="15px"
                                heigh="15px"
                                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwNSA1MTIuMDA1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDA1IDUxMi4wMDU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTA1Ljc0OSw0NzUuNTg3bC0xNDUuNi0xNDUuNmMyOC4yMDMtMzQuODM3LDQ1LjE4NC03OS4xMDQsNDUuMTg0LTEyNy4zMTdjMC0xMTEuNzQ0LTkwLjkyMy0yMDIuNjY3LTIwMi42NjctMjAyLjY2Nw0KCQkJUzAsOTAuOTI1LDAsMjAyLjY2OXM5MC45MjMsMjAyLjY2NywyMDIuNjY3LDIwMi42NjdjNDguMjEzLDAsOTIuNDgtMTYuOTgxLDEyNy4zMTctNDUuMTg0bDE0NS42LDE0NS42DQoJCQljNC4xNiw0LjE2LDkuNjIxLDYuMjUxLDE1LjA4Myw2LjI1MXMxMC45MjMtMi4wOTEsMTUuMDgzLTYuMjUxQzUxNC4wOTEsNDk3LjQxMSw1MTQuMDkxLDQ4My45MjgsNTA1Ljc0OSw0NzUuNTg3eg0KCQkJIE0yMDIuNjY3LDM2Mi42NjljLTg4LjIzNSwwLTE2MC03MS43NjUtMTYwLTE2MHM3MS43NjUtMTYwLDE2MC0xNjBzMTYwLDcxLjc2NSwxNjAsMTYwUzI5MC45MDEsMzYyLjY2OSwyMDIuNjY3LDM2Mi42Njl6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
                        </span>
                        <div className="eRxiIQ UXYZvg">Search</div>
                    </div>
                </button>
            </footer>
            {/* {toggleSearch && (
                <PokemonFilterResultsView
                    onClick={() => setToggleSearch(false)}
                />
            )} */}
        </>
    )
}

export default Footer;
