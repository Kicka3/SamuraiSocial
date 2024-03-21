import React from "react";
import {create} from "react-test-renderer";
import {ProfileStatus} from "../profileStatus/ProfileStatus";

describe("Profile status component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus profileStatus="testing component"
                                                updateUserStatusTC={() => {
                                                }}/>);
        const instance = component.getInstance();
        // expect(instance?.state.status).toBe("testing component");
    });

    test(`after creation <input> - shouldn't be displayed`, () => {
        const component = create(<ProfileStatus profileStatus="testing component"
                                                updateUserStatusTC={() => {
                                                }}/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input")
        }).toThrow()
    });

    test(`after creation <span> - should contains correct status`, () => {
        const component = create(<ProfileStatus profileStatus="testing component"
                                                updateUserStatusTC={() => {
                                                }}/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("testing component instead of span");
    });

    test(`input should be displayed in editMode`, () => {
        const component = create(<ProfileStatus profileStatus="testing component"
                                                updateUserStatusTC={() => {}}/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("testing component");
    });

    test(`callback should be called`, () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus profileStatus="testing component"
                                                updateUserStatusTC={mockCallback}/>);
        const instance = component.getInstance();
        // instance.activeEditModeHandler();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});