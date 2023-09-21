document.addEventListener( 'DOMContentLoaded', function() {
    const inspectorPanelId = 'woocommerce-block-template-inspector';

    function createInspectorPanel() {
        const inspectorPanel = document.querySelector( 'body' ).appendChild( document.createElement('div') );
        inspectorPanel.id = inspectorPanelId;

        inspectorPanel.style.position = 'absolute';
        inspectorPanel.style.bottom = '0';
        inspectorPanel.style.left = '0';
        inspectorPanel.style.zIndex = '999999';
        inspectorPanel.style.display = 'none';
        inspectorPanel.style.gridTemplateColumns = 'auto auto';
        inspectorPanel.style.gap = '0 10px';
        inspectorPanel.style.background = 'black';
        inspectorPanel.style.color = 'white';
        inspectorPanel.style.borderRadius = '5px';
        inspectorPanel.style.opacity = '.85';
        inspectorPanel.style.margin = '10px';
        inspectorPanel.style.padding = '10px';
        inspectorPanel.style.whiteSpace = 'pre';

        return inspectorPanel;
    }
    
    function getInspectorPanel() {
        return document.getElementById( inspectorPanelId ) || createInspectorPanel();
    }

    function getBlockInfo( element ) {
        return [
            `<span>Block name:</span><span>${element.dataset.type}</span>`,
            `<span>Template block id:</span><span>${element.dataset.templateBlockId || '(unknown)'}</span>`,
            `<span>Template block order:</span><span>${element.dataset.templateBlockOrder || '(unknown)'}</span>`,
        ].join( '\n' );
    }

    function showInspectorPanel( element ) {
        const inspectorPanel = getInspectorPanel();
        inspectorPanel.innerHTML = getBlockInfo( element );
        inspectorPanel.style.display = 'grid';
    }

    function hideInspectorPanel() {
        getInspectorPanel().style.display = 'none';
    }

    document.querySelector( 'body' ).addEventListener( 'focus', ( event ) => {
        const target = event.target;

        const blockElement = target.closest( '[data-block]' );

        if ( blockElement ) {
            showInspectorPanel( blockElement );
        } else {
            hideInspectorPanel();
        }
    }, {
        capture: true,
    } );
} );