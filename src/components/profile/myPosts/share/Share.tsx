import "./share.css"
import React from "react";

type SharePropsType = {
    addPost: (postMessage: string) => void
}

const Share: React.FC<SharePropsType> = (props) => {
    const {addPost} = props

    let newPostElement = React.createRef<HTMLInputElement>()
    const addPostHandler = () => {
        debugger
        let text = newPostElement.current?.value
        if (newPostElement.current) {
            let text = newPostElement.current.value
            addPost(text);
        }


    }
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">

                    {/*//AВАТАРКА USERA*/}
                    <img className="shareProfileImg"
                         src={'assets/person/person0.jpeg'}
                         alt="User's Avatar"/>

                    <input className="shareInput"
                           placeholder={"What's in your mind ?"}
                           ref={newPostElement}
                    />
                </div>
                <hr className="sharHr"/>
                <form className="shareBottom">
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">

                            {/*ИКОНКА*/}
                            {/*<PermMediaIcon htmlColor="#7B68EE" className="shareIcon"/>*/}


                            <span className="shareOptionText">Photo / Video</span>
                            <input style={{display: "none"}}
                                   type="file" id="file"
                                   accept=".png,.jpeg,.jpg"/>

                        </label>
                        {/*<div className="shareOption">*/}
                        {/*   /!*ИКОНКА*!/*/}
                        {/*   /!*<LabelImportantIcon htmlColor="#1E90FF" className="shareIcon"/>*!/*/}

                        {/*   <span className="shareOptionText">Tag</span>*/}
                        {/*</div>*/}

                        {/*<div className="shareOption">*/}
                        {/*   /!*ИКОНКА*!/*/}
                        {/*   /!*<LocationOnIcon htmlColor="#7B68EE" className="shareIcon"/>*!/*/}

                        {/*   <span className="shareOptionText">Location</span>*/}
                        {/*</div>*/}

                        {/*<div className="shareOption">*/}
                        {/*   /!*ИКОНКА*!/*/}
                        {/*   /!*<EmojiEmotionsIcon htmlColor="#1E90FF" className="shareIcon"/>*!/*/}

                        {/*   <span className="shareOptionText">Feelings</span>*/}
                        {/*</div>*/}
                    </div>
                    <button className="shareBtn"
                        // type="submit"
                            onClick={addPostHandler}
                    >Share
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Share;