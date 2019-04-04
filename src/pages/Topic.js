import React from "react";

export function Topic({match}) {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    );
}