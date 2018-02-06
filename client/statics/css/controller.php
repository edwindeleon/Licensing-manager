<?php
/**
 * @version		$Id$
 * @author		JoomlaUX
 * @package		Joomla
 * @subpackage		com_jux_real_estate
 * 
 * @copyright		Copyright (C) 2012 - 2015 by JoomlaUX. All rights reserved.
 * @license		http://www.gnu.org/licenses/gpl-3.0.html GNU/GPL, See LICENSE.txt
 */

// no direct access
defined('_JEXEC') or die('Restricted access');
jimport('joomla.application.component.controller');

/**
 * JUX_Real_Estate controller
 * @package		JUX_Real_Estate
 * @subpackage	Controller
 * @since		3.0
 *
 */
class JUX_Real_EstateController extends JControllerLegacy {

    /**
     * default display
     */
    public function display($cachable = false, $urlparams = array()) {
	// set a default view if none exists
	if (!JRequest::getCmd('view') && !JRequest::getCmd('task')) {
	    JRequest::setVar('view', 'list');
	}
	parent::display();
    }

}
