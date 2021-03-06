function Painel(context, nave, versao) {
    // Passamos o context para conseguirmos desenhar
    this.context = context;
    
    // Passamos a nave para pegar a quantidade de vidas
    this.nave = nave;
    
    // Passamos a versão para ser mostrada na tela
    this.versao = versao;
    
    // Spritesheet da nave
    this.spritesheet = new Spritesheet(context, nave.imagem, 4, 5);
    
    // Configuramos para a primeira linha da spritesheet
    this.spritesheet.linha = 0;
    
    // Configuramos para a primeira coluna da spritesheet
    this.spritesheet.coluna = 2;
    
    // Criamos a pontuação do jogador
    this.pontuacao = 0;
}

Painel.prototype = {
    atualizar: function() {
        
    },
    
    desenhar: function() {
        // Para facilitar a escrita
        var c = this.context;
        
        // Salvamos a configuração do contexto
        c.save();
        
        // Escalamos o contexto para a metade do tamanho
        c.scale(0.5, 0.5);
        
        // Coordenadas onde começa o desenho das vidas
        var x = 20;
        var y = 20;
        
        // Para cada vida extra, desenhamos uma nave
        for (var i = 0; i < this.nave.vidasExtras; i++) {
            this.spritesheet.desenhar(x, y);
            x += 40;
        }
        
        // Restauramos a configuração do contexto
        c.restore();
        
        // Salvamos as configurações do contexto
        c.save();
        
        // Definimos a cor e a fonte
        c.fillStyle = 'white';
        c.font = '15px serif';
        
        // Colocamos a pontuação na tela
        c.fillText(this.pontuacao + " pontos", 10, c.canvas.width - 10);
        
        // Redefinimos a fonte
        c.font = '12px serif';
        
        // Colocamos a versao na tela
        c.fillText("v" + this.versao, c.canvas.width - 40, c.canvas.height - 10);        
        
        // Restauramos as configurações do contexto
        c.restore();
    }
}