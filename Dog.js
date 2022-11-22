class Dog {
    constructor(data){
        Object.assign(this, data)
    }

    setHasBeenSwiped(){
        this.hasBeenSwiped = true
    }

    setHasBeenLiked(){
        this.hasBeenLiked = true
    }

    getDogHtml(){
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        const badge = hasBeenLiked ? './images/badge-like.png' :
                        hasBeenSwiped ? './images/badge-nope.png' : '#'

        return `
            <div class="content" style="background-image: url('./${avatar}');">
                <h2 class="name">${name}, ${age}</h2>
                <h3 class="bio">${bio}</h3>
                <div class="top-badge hidden" id="badge">
                    <img src="${badge}" alt="badge" class="badge">
                </div>
            </div>
        `
    }
}

export default Dog