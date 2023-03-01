import React from "react";

export const TodoCreatePanel = () => {

    return (
        <div>
            <form method="post">
                <label>
                    Title:
                    <input name="title" type='text' required minLength={1} title="This field is empty" />
                </label>
            <label>
                Description:
                <input name="Description" type='text' required minLength={1} title="This field is empty" />
            </label>
            <button type="submit">
                Create
            </button>
            </form>            
        </div >
    )
}