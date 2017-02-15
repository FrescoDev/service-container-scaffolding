import BaseHandler from './base.handler';
import settings from '../configuration';

class MetaHandler extends BaseHandler {
  index(req, res) {
		res.json({
			description: 'This skeletal applicaiton should serve as a template for developing http services',
			version : '1.0',
			health: 'ok'
		});
	}
}

export default new MetaHandler();