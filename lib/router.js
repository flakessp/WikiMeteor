Router.configure({
	layoutTemplate:'layout'
});

Router.map(function(){
	this.route('postsList',{path: '/'});

	this.route('postPage',{
		path: '/posts/:_id',
		data: function() { return Posts.findOne(this.params._id); }
	});
});

Router.route('/submit', {name: 'postSubmit'});

var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLogin, {only: 'postSubmit'});