var SearchPage = React.createClass({
  getInitialState: function(){
    return {recipes: []}
  },
  componentDidMount: function(){
    $.ajax({
      url: '/recipes.json',
      method: 'GET',
      success: function(data, status, xhr){
        this.setState({recipes: data})
      }.bind(this)
    })
  },
  render: function(){
    var recipe = this.state.recipes.map(function(recipe){
      return (
        <li className='rbox'>
          <a href={'/recipes/'+recipe.id}><h2>{recipe.title}</h2></a>
          <a href={'/recipes/'+recipe.id}><img width="250" height="150" src={recipe.image_url}/></a>
          <p>{recipe.description}</p>
        </li>
      )
    });
    return (
      <div>
        <nav>
  <div className="nav-search-container">
    <input type="search" name="q" className="search-input ui-autocomplete-input" placeholder="Search Site..."/>
    <div className="submit-container"><input className="submit" type="submit" value="Submit"/></div>
  </div>
</nav>
      <ul className='foodinfo sortable'>{recipe}</ul>
      </div>
    )
  }
})
