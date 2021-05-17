import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Modal from '../Modal';

jest.mock("../Modal", () => {
    return function PokemonDescriptionComponentFake(props) {
        const { children, shown, close, title } = props
        return (
            <div data-testid="poke-mod">
                {children} {shown} {close} {title}
            </div>
        )
    }
});

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("should render Modal", () => {
    const children = <div>Hey Bulldog</div>
    const getFunc = (number = 1) => (number * 2);

    act(() => {
        render(
            <Modal
                title="Cerrar"
                shown={true}
                children={children}
                close={getFunc}
            />
        )
    })
});

expect(
    container.querySelector("[data-testid='poke-mod']")
        .textContent).toEqual("Cerrar");

