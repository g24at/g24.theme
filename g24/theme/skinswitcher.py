from Products.CMFCore.utils import getToolByName

def set_skin(site, event):
    """ Eventhandler to set the skin.

    """
    # TODO: does not work
    #       change the skin via ?plone_skin=Sunburst Theme
    #       why does jens in lineage.themeselection:
    #       alsoProvides(event.request, ILineageThemingLayer)

    # TODO: why am i called 30 times?
    if 'HTTP_X_THEME_ENABLED' in event.request.environ:
        skin_name = 'g24_skin_theme'
    else:
        skin_name = 'Sunburst Theme'
    portal = getToolByName(site, 'portal_url').getPortalObject()
    portal.changeSkin(skin_name, event.request)
    print('Switched to skin: %s.' % skin_name)
