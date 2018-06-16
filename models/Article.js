
// ============================================================================
//                     			Articles Schema        
// ============================================================================

const mongoose	= require('mongoose');
const Schema	= mongoose.Schema;

const ArticleSchema = new Schema({
			title: 	{ 
				type: 		String, 
				unique: 	true, 
				required: 	true, 
				dropDups: 	true 
			},
			url: 	{
				type: 		String, 
				unique: 	true, 
				required: 	true, 
				dropDups: 	true
			},
			date: 	{
				type: 		Date,
				required: 	false
			},
			comments: [{
					type: Schema.ObjectId,
					ref : 'Comment'
			}]
})

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;