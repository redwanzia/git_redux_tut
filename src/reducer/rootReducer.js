const initState = {
 		posts: [
			{
        id: '1', 
        title: 'Next level pitchfork lyft edison bulb', 
        body: 'Next level pitchfork lyft edison bulb, roof party cloud bread kinfolk helvetica. Brooklyn crucifix cloud bread iPhone poutine blue bottle jianbing lyft tote bag drinking vinegar kickstarter typewriter'
			},
			{
			id: '2',
			title: 'Next level pitchfork lyft edison bulb',
			body: 'Next level pitchfork lyft edison bulb, roof party cloud bread kinfolk helvetica. Brooklyn crucifix cloud bread iPhone poutine blue bottle jianbing lyft tote bag drinking vinegar kickstarter typewriter'
		},
					{
			id: '3',
			title: 'Next level pitchfork lyft edison bulb',
			body: 'Next level pitchfork lyft edison bulb, roof party cloud bread kinfolk helvetica. Brooklyn crucifix cloud bread iPhone poutine blue bottle jianbing lyft tote bag drinking vinegar kickstarter typewriter'
		}
		]
}

const rootReducer =(state = initState, action) => {
 if(action.type === 'DELETE_POST'){
  let newPost = state.posts.filter(post=>{

    return action.id !== post.id

  })

return{
  ...state,
  posts: newPost

}

 }
return state

}

export default rootReducer